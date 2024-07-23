import {ReactNode} from 'react'
import s from "./page.module.css";

type Props = {
    children?: ReactNode;
}
export const Page = ({children}:Props) => {
    return <main className={s.main}>{children}</main>
}