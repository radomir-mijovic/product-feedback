import React, {Fragment, useEffect} from 'react';
import styled from "styled-components";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import Suggestions from "../Components/Sugestions/Suggestions";
import HeaderMobile from "../Components/Header/HeaderMobile";
import SuggestionsMobile from "../Components/Sugestions/SuggestionsMobile";
import {useProductFeedbackContext} from "../Components/context/product_feedback_context";
import NoSuggestions from "../Components/Sugestions/NoSuggestions";
import Loading from "../Components/Loading/Loading";

const SuggestionsPage = () => {
    const {
        sortBy,
        filtered_products_feedbacks,
        isLoading,
    } = useProductFeedbackContext()

    useEffect(() => {
        const e = 'Most Upvotes'
        sortBy(e)
    }, [])


    return (
        <SuggestionsPageWrapper>
            <Sidebar/>
            <div className="right-side">
                <HeaderMobile/>
                <Header/>
                {isLoading ? <Loading/> :
                    <>
                    {filtered_products_feedbacks.length === 0 ? <NoSuggestions/> :
                            filtered_products_feedbacks.filter(
                                item => item.status === 'Suggestion'
                            ).map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Suggestions {...item}/>
                                        <SuggestionsMobile {...item}/>
                                    </Fragment>
                                )
                            })}
                    </>
                }
            </div>
        </SuggestionsPageWrapper>
    );
};

const SuggestionsPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 94px 165px;


  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 56px 40px;

    .right-side {
      width: 689px;
    }
  }

  @media (max-width: 700px) {
    padding: 0;

    .right-side {
      width: 100vw;
    }
  }
`

export default SuggestionsPage;