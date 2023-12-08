import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
    const error = useRouteError();
    let title = "An error occured!";
    let message = "Something went wrong.";

    if(error.status === 500) {
        message = error.data.message;
    }

    if(error.status === 404){
        message = "Not found";
        title = "Could not found resource and page.";
    }
    return <PageContent title={title}>
        <MainNavigation />
        <p>{message}</p>
    </PageContent>
}

export default ErrorPage;