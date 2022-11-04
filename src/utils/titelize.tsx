export const titelize = (title:string) => {
    return title.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"_").replace(/ *\([^)]*\) */g, "").replace( /[()\\\/]/g, "" );
}