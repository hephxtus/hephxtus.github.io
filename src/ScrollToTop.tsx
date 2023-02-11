import "./css/ScrollToTop.css"

export default function ScrollToTop() {
    function onClick() {
        window.scrollTo(0, 0)
    }

    return <a className="ScrollToTop" onClick={onClick}>↑</a>
}