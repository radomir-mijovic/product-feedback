import React, {useEffect} from "react";
import {Route, Switch} from 'react-router-dom'
import SuggestionsPage from './Pages/SuggestionsPage'
import FeedbackDetailPage from "./Pages/FeedbackDetailPage";
import NewFeedbackPage from "./Pages/NewFeedbackPage";
import EditFeedbackPage from "./Pages/EditFeedbackPage";
import RoadmapPage from "./Pages/RoadmapPage";
import AlertModal from "./Components/AlertModal/AlertModal";
import RegisterModal from "./Components/Auth/RegisterModal";
import {useModalsContext} from "./Components/context/modals_context";
import {useAuthContext} from "./Components/context/auth_context";
import ScrollToTop from "./Components/helpers/scroll_to_top";
import {useProductFeedbackContext} from "./Components/context/product_feedback_context";
import LogoutButton from "./Components/UI/LogoutButton";
import NoPageFound from "./Pages/NoPageFound";

function App() {
    const {isAlertModal} = useModalsContext()
    const {authModal, isAuthenticated, authUserCheck} = useAuthContext()
    const {ProductFeedbackList} = useProductFeedbackContext()

    useEffect(() => {
        ProductFeedbackList()
        authUserCheck()
    }, [])

    return (
        <>
            {isAuthenticated && <LogoutButton/>}
            {isAlertModal && <AlertModal/>}
            {authModal && <RegisterModal/>}
            <ScrollToTop/>
            <Switch>
                <Route exact path='/' component={SuggestionsPage}/>
                <Route exact path='/feedback-detail/:id' component={FeedbackDetailPage}/>
                <Route exact path='/new-feedback' component={NewFeedbackPage}/>
                <Route exact path='/edit-feedback/:id' component={EditFeedbackPage}/>
                <Route exact path='/roadmap' component={RoadmapPage}/>
                <Route path='*' component={NoPageFound}/>
            </Switch>
        </>
    );
}

export default App;
