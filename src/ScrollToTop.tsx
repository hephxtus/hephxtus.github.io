import "./css/ScrollToTop.css"

export default function ScrollToTop() {
    function onClick() {
        window.scrollTo(0, 0)
    }

    return <button className="ScrollToTop" onClick={onClick}>↑</button>
}