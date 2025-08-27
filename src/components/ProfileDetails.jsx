import React, { useState } from "react";



export default function ProfileDetails(props){

    return (
    <>
        <h2>Welcome, {props.email}</h2>
        <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/42.jpg" alt=""></img>

    </>
    );
    
}



/*       <h2>Welcome, {session?.user?.email}</h2>
      <div className="w-full rounded-lg border-2 border-black-600 p-4 my-8 mx-auto max-w-xl">
            <h3 className="font-os text-lg font-bold">Comments</h3>
        
       <div className="flex mt-4">
        <div className="w-14 h-14 rounded-full bg-black-400/50 flex-shrink-0 flex items-center justify-center">
            <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg"
                        alt=""></img>
        </div>
*/