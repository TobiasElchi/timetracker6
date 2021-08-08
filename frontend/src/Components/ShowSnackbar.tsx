import React from "react";

export function showSnackbar(snackbar: HTMLElement | null) {
    if(snackbar!=null){
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "");
        }, 3000);
    }
}
