import {useEffect} from "react";
import {withRouter} from "react-router-dom";

const ScrollToTop = ({history}) => {
    useEffect(() => {
        const start_on_top = history.listen(() => {
            window.scroll(0, 0)
        })
        return () => {
            start_on_top()
        }
    }, [])
    return null
}

export default withRouter(ScrollToTop);