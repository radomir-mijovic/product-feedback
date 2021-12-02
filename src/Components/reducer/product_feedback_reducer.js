export const product_feedback_reducer = (state, action) => {
    if (action.type === 'FETCH_PRODUCTS_FEEDBACKS') {
        return {
            ...state,
            products_feedbacks: action.payload,
            filtered_products_feedbacks: action.payload,
            isLoading: false,
            isError: false
        }
    }

    if (action.type === 'FETCH_PRODUCT_RESPONSE') {
        const {comments} = action.payload
        return {
            ...state,
            product_response: action.payload,
            reducer_comments: comments,
            isLoading: false,
            isError: false
        }
    }

    if (action.type === 'ADD_NEW_FEEDBACK') {
        return {
            ...state,
            products_feedbacks: [
                ...state.products_feedbacks, {
                    ...state.products_feedbacks, ...action.payload
                }
            ],
            filtered_products_feedbacks: [
                ...state.products_feedbacks, {
                    ...action.payload, ...state.filtered_products_feedbacks
                }
            ]
        }
    }

    if (action.type === 'UPDATE_FEEDBACK') {
        const {id, title, status, description, category} = action.payload;
        return {
            ...state,
            filtered_products_feedbacks: [
                ...state.products_feedbacks, ...state.products_feedbacks.filter(
                    item => {
                        if (item.id === id) {
                            item.title = title
                            item.category = category
                            item.status = status
                            item.description = description
                        }
                    }
                )
            ]
        }
    }

    if (action.type === 'DELETE_FEEDBACK') {
        const {id} = action.payload;
        return {
            ...state,
            products_feedbacks: state.products_feedbacks.filter(
                item => item.id !== id
            ),
            filtered_products_feedbacks: state.filtered_products_feedbacks.filter(
                item => item.id !== id
            )
        }
    }

    if (action.type === 'ADD_COMMENT') {
        const {product} = action.payload
        return {
            ...state,
            product_response: state.product_response, ...state.product_response.comments.push(action.payload),
            filtered_products_feedbacks: [
                ...state.filtered_products_feedbacks, ...state.filtered_products_feedbacks.filter(
                    item => {
                        if (item.id === product) {
                            item.comments.push(action.payload)
                        }
                    }
                )
            ]
        }
    }

    if (action.type === 'ADD_REPLY') {
        const {comment} = action.payload
        return {
            ...state,
            reducer_comments: [
                ...state.reducer_comments, ...state.reducer_comments.filter(item => {
                    if (item.id === comment) {
                        item.replies.push(action.payload)
                    }
                })
            ]
        }
    }

    if (action.type === 'ADD_UP_VOTE') {
        const {id, up_votes} = action.payload;
        return {
            ...state,
            product_response: action.payload,
            filtered_products_feedbacks: [
                ...state.filtered_products_feedbacks, ...state.filtered_products_feedbacks.filter(
                    item => {
                        if (item.id === id) {
                            item.up_votes = up_votes
                        }
                    }
                )
            ],
            products_feedbacks: [
                ...state.products_feedbacks, ...state.products_feedbacks.filter(
                    item => {
                        if (item.id === id) {
                            item.up_votes = up_votes
                        }
                    }
                )
            ]
        }
    }

    if (action.type === 'FILTER_BY_CATEGORY') {
        if (action.payload === 'All') {
            return {
                ...state,
                filtered_products_feedbacks: state.products_feedbacks.sort(
                    (a, b) => b.up_votes - a.up_votes
                ),
            }
        }
        return {
            ...state,
            filtered_products_feedbacks: state.products_feedbacks.filter(
                item => item.category === action.payload
            ).sort(
                (a, b) => b.up_votes - a.up_votes
            )
        }
    }

    if (action.type === 'SORT_BY') {
        let tempSort = [
            ...state.filtered_products_feedbacks
        ]

        if (action.payload === 'Most Upvotes') {
            tempSort = tempSort.sort(
                (a, b) => b.up_votes - a.up_votes
            )
        }
        if (action.payload === 'Least Upvotes') {
            tempSort = tempSort.sort(
                (a, b) => a.up_votes - b.up_votes
            )
        }
        if (action.payload === 'Most Comments') {
            tempSort = tempSort.sort(
                (a, b) => b.comments.length - a.comments.length
            )
        }
        if (action.payload === 'Least Comments') {
            tempSort = tempSort.sort(
                (a, b) => a.comments.length - b.comments.length
            )
        }
        return {
            ...state,
            filtered_products_feedbacks: tempSort
        }
    }


    if (action.type === 'LOADING') {
        return {
            ...state,
            isLoading: true,
            isError: false
        }
    }
}