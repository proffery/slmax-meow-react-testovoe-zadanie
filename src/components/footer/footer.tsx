import s from './footer.module.css'
export const Footer = () => {
    return <p className={s.footer}>Coded by Dmitry Shamko for SLMAX {new Date().getFullYear()}</p>
}