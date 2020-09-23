export const getUsers = (state) => {
    return state.authorsPage.users;
}

export const getUsersForPage = (state) => {
    return state.authorsPage.usersForPage;
}

export const getCurrentPage = (state) => {
    return state.authorsPage.currentPage;
}

export const getTotalCount = (state) => {
    return state.authorsPage.totalCount;
}

export const getIsFetching = (state) => {
    return state.authorsPage.isFetching;
}

export const getDisabled = (state) => {
    return state.authorsPage.disabled;
}