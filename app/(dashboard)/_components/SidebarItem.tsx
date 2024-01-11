"use client"
import {usePathname, useRouter} from "next/navigation";
import {cn} from "@lib/utils";
import {motion} from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

type SidebarItemProps = {
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>
    label: string
    href: string
    subCategory?: {
        icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>>
        label: string
        href: string
    }[]
}

const SidebarItem = ({icon: Icon, label, href, subCategory, ...props}: SidebarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive =
        pathname === "/" && href === "/" ||
        pathname === href ||
        pathname?.startsWith(`${href}/`)


    const handleClick = () => {
        router.push(href)
    }

    // const handleSubCategoryClick = (href: string) => {
    //     router.push(href)
    // }


    return (
        <div className="flex flex-col w-full">
            <motion.button
                {...props}
                transition={{duration: 0.3}}
                onClick={handleClick}
                type={"button"}
                className={cn("flex rounded-lg items-center text-white/75 text-[12px] pl-6 transition-all w-full hover:dark:text-primary-foreground/90 hover:text-white/85 hover:bg-white/5", isActive && "text-white dark:text-primary-foreground hover:bg-white/10 bg-white/10 hover:dark:text-primary-foreground")}
            >
                <motion.div
                    transition={{duration: 0.3}}
                    animate={{scale: isActive ? 1.05 : 1}}
                    className="flex w-full justify-start items-center gap-x-4 py-4">
                    <Icon
                        fontSize={22}
                        className={cn("text-white/75", isActive && "dark:text-primary-foreground text-white")}/>
                    {label}
                    {
                        label === "Audit Trail" &&
                        <button className="ml-auto bg-white/20 p-1 rounded-full hover:bg-transparent">
                            <IoIosArrowDown />
                        </button>
                    }
                </motion.div>
                <div
                    className={cn("flex w-1.5 h-full justify-end rounded-tr-lg rounded-br-lg transition-all overflow-hidden", isActive ? "bg-white" : "bg-transparent")}
                />
            </motion.button>
            {/*In case of subcategories*/}
            {/*<AnimatePresence>*/}
            {/*    {*/}
            {/*        isActive && subCategory &&*/}
            {/*        <motion.div*/}
            {/*            key="userSub"*/}
            {/*            initial={{height: 0, opacity: 0}}*/}
            {/*            animate={{*/}
            {/*                height: isActive && subCategory ? "auto" : 0,*/}
            {/*                opacity: isActive && subCategory ? 1 : 0*/}
            {/*            }}*/}
            {/*            transition={{duration: 0.2}}*/}
            {/*            exit={{height: 0, opacity: 0}}*/}
            {/*            className={"flex flex-col w-full border-b"}*/}
            {/*        >*/}
            {/*            {*/}
            {/*                subCategory.map((category, index) => {*/}
            {/*                    Icon = category.icon*/}

            {/*                    const isSubCategory =*/}
            {/*                        pathname === "/" && category.href === "/" ||*/}
            {/*                        pathname === category.href ||*/}
            {/*                        pathname?.includes(`${category.href}`)*/}

            {/*                    return <motion.button*/}
            {/*                        transition={{duration: 0.1}}*/}
            {/*                        animate={{scale: isSubCategory ? 1.05 : 1}}*/}
            {/*                        key={index}*/}
            {/*                        onClick={() => handleSubCategoryClick(category.href)}*/}
            {/*                        className={cn("flex items-center gap-x-2 duration-300 ease-in-out text-slate-500 text-[13px] font-[500] pl-6 transition-all hover:dark:text-primary-foreground/90 hover:text-primary hover:bg-primary/5", isSubCategory && "text-slate-800 dark:text-primary-foreground bg-primary/5 hover:bg-primary/10 hover:dark:text-primary-foreground")}*/}
            {/*                    >*/}
            {/*                        <div className="flex items-center gap-x-4 py-4 text-[13px]">*/}
            {/*                            <Icon*/}
            {/*                                className={cn("text-slate-500", isSubCategory && "dark:text-primary-foreground text-slate-800")}/>*/}
            {/*                            {category.label}*/}
            {/*                        </div>*/}
            {/*                    </motion.button>*/}
            {/*                })*/}
            {/*            }*/}
            {/*        </motion.div>*/}
            {/*    }*/}
            {/*</AnimatePresence>*/}
        </div>
    );
};

export default SidebarItem;