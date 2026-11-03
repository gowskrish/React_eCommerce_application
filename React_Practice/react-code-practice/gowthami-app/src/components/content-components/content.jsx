import React from 'react';
import './content.css'
import Searchmain from "./searchmainsection/searchmain";
import NewColloection from "./newcollection/newcollection";
import NewThisWeek from "./newthisweek/newthisweek";
import XIVCollections from "./xivcollections/xivcollection";
import Ourapproach from "./ourapproach/ourapproach";

function Content() {

    return (
        <>
            <div className="content-component">
                <Searchmain />
                <NewColloection />
                <NewThisWeek />
                <XIVCollections />
                <Ourapproach />
            </div>
        </>


    )
}

export default Content;