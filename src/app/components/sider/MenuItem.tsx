import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItem = (props: any) => {
    const {item, isLogin} = props;

    const pathName = usePathname();

    return (
        <>
            {(item.isLogin === undefined || item.isLogin === isLogin) && (
                <li>
                <Link
                    href={item.url}
                    className={"flex gap-[20px] items-center  hover:text-primary" + (pathName === item.url ? " text-primary" : " text-white")}
                >
                    <span className="text-[24px]">{item.icon}</span>
                    <span className="font-[700] text-[16px]">{item.title}</span>
                </Link>
                </li>
            )}
        </>
    );
}