export const Container = ({className, children}) => {
    return (
        <div className={`max-w-screen-xl mx-auto px-2.5 ${className}`} >{children}</div>
    )
}