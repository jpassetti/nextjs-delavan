import classNames from 'classnames/bind'
import styles from './icon.module.scss';

let cx = classNames.bind(styles);

const Icon = ({ icon, active, color }) => {
    let iconClasses = cx({
        icon: true,
        active: active,
        close: icon === 'close',
        [`fill-${color}`] : color
    });
    return icon === "grid" ? <svg className={iconClasses} x="0px" y="0px"
         viewBox="0 0 167.9 167.78" style={{ enableBackground: "new 0 0 167.9 167.78"}} xmlSpace="preserve">
    <path d="M23.93,47.79c-3.41,0-6.85,0.29-10.22-0.06C6.25,46.95,0.88,41.75,0.36,34.24c-0.47-6.78-0.47-13.65,0-20.43
        C0.87,6.29,6.22,0.9,13.71,0.36c6.87-0.49,13.82-0.49,20.69,0c7.48,0.53,12.85,5.97,13.35,13.44c0.45,6.78,0.48,13.65,0,20.43
        c-0.58,8.1-6.85,13.46-15.08,13.66c-2.91,0.07-5.82,0.01-8.74,0.01C23.93,47.87,23.93,47.83,23.93,47.79z M60.05,23.94
        c0,2.91-0.06,5.82,0.01,8.73c0.18,8.16,5.62,14.47,13.72,15.03c6.79,0.47,13.66,0.46,20.44-0.01c7.48-0.51,12.9-5.9,13.42-13.38
        c0.47-6.86,0.48-13.82-0.01-20.68c-0.53-7.45-6-12.81-13.49-13.3c-6.79-0.45-13.66-0.46-20.44,0.01
        c-7.51,0.52-12.66,5.87-13.46,13.37c-0.36,3.37-0.06,6.81-0.06,10.22C60.13,23.94,60.09,23.94,60.05,23.94z M143.71,47.91
        c2.91,0,5.83,0.06,8.74-0.01c8.23-0.2,14.51-5.55,15.1-13.64c0.49-6.78,0.46-13.65,0.01-20.43c-0.49-7.47-5.86-12.93-13.33-13.46
        c-6.87-0.49-13.82-0.49-20.69,0c-7.5,0.53-12.84,5.91-13.37,13.43c-0.48,6.78-0.47,13.65-0.01,20.43
        c0.51,7.51,5.88,12.72,13.34,13.51c3.37,0.36,6.81,0.06,10.22,0.06C143.71,47.83,143.71,47.87,143.71,47.91z M47.96,84.01
        c0-2.91,0.06-5.82-0.01-8.73c-0.21-8.21-5.57-14.48-13.68-15.06c-6.78-0.49-13.65-0.46-20.44,0c-7.51,0.51-12.9,5.82-13.45,13.34
        c-0.5,6.86-0.5,13.82,0,20.68c0.55,7.52,5.96,12.83,13.46,13.33c6.79,0.45,13.65,0.45,20.44,0c7.48-0.5,12.71-5.9,13.49-13.34
        c0.35-3.37,0.06-6.81,0.06-10.22C47.87,84.01,47.92,84.01,47.96,84.01z M83.85,107.78c2.91,0,5.83,0.06,8.74-0.01
        c8.22-0.21,14.49-5.58,15.06-13.68c0.48-6.78,0.46-13.65,0-20.43c-0.5-7.48-5.87-12.9-13.36-13.43c-6.87-0.48-13.82-0.49-20.69,0
        c-7.49,0.53-12.82,5.94-13.34,13.46c-0.46,6.78-0.47,13.65,0.01,20.43c0.53,7.51,5.9,12.69,13.37,13.47
        c3.37,0.35,6.81,0.06,10.22,0.06C83.85,107.7,83.85,107.74,83.85,107.78z M143.73,107.78c2.91,0,5.83,0.06,8.74-0.01
        c8.23-0.21,14.5-5.57,15.08-13.66c0.48-6.78,0.46-13.65,0-20.43c-0.5-7.47-5.87-12.91-13.35-13.44c-6.87-0.49-13.82-0.49-20.69,0
        c-7.49,0.53-12.83,5.93-13.35,13.44c-0.47,6.78-0.47,13.65,0,20.43c0.52,7.51,5.89,12.71,13.35,13.49
        c3.37,0.35,6.81,0.06,10.22,0.06C143.73,107.7,143.73,107.74,143.73,107.78z M47.96,143.86c0-2.91,0.06-5.81-0.01-8.72
        c-0.21-8.2-5.56-14.47-13.65-15.06c-6.77-0.49-13.63-0.46-20.41-0.01c-7.6,0.51-13.02,5.9-13.53,13.51
        c-0.46,6.77-0.47,13.63,0.01,20.4c0.53,7.5,5.88,12.9,13.33,13.43c6.86,0.48,13.8,0.48,20.66,0.01c7.47-0.51,12.66-5.91,13.43-13.36
        c0.35-3.37,0.06-6.8,0.06-10.2C47.88,143.86,47.92,143.86,47.96,143.86z M92.59,167.64c8.21-0.21,14.48-5.56,15.06-13.64
        c0.49-6.77,0.46-13.63,0.01-20.4c-0.5-7.57-5.94-13.01-13.53-13.52c-6.78-0.45-13.64-0.46-20.41,0.01
        c-7.5,0.51-12.89,5.82-13.44,13.33c-0.5,6.85-0.52,13.8,0,20.65c0.61,8.01,6.79,13.3,14.86,13.57c2.9,0.1,5.82,0.02,8.72,0.02
        C86.77,167.65,89.68,167.71,92.59,167.64z M167.76,143.76c0-2.91,0.07-5.81-0.01-8.72c-0.24-8.18-5.65-14.4-13.75-14.96
        c-6.69-0.47-13.47-0.44-20.17-0.02c-7.62,0.48-13.1,5.79-13.65,13.39c-0.5,6.85-0.5,13.8,0,20.65c0.56,7.6,6.06,12.9,13.66,13.37
        c6.7,0.41,13.47,0.43,20.17-0.02c7.57-0.5,12.84-5.94,13.58-13.49c0.33-3.37,0.06-6.8,0.06-10.2
        C167.69,143.76,167.72,143.76,167.76,143.76z"/>
    </svg>
    : icon === "list" ?
    <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
    : icon === "close" ?
    <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
    : icon === "menu" ?
    <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    : icon === "facebook" ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
    : icon === "instagram" ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
    : icon==="twitter" ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
    : icon==="linkedin" ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
    : icon==="youtube" ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
    : icon==="pinterest" ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
    : icon==="etsy" ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 348c-1.75 10.75-13.75 110-15.5 132-117.879-4.299-219.895-4.743-368.5 0v-25.5c45.457-8.948 60.627-8.019 61-35.25 1.793-72.322 3.524-244.143 0-322-1.029-28.46-12.13-26.765-61-36v-25.5c73.886 2.358 255.933 8.551 362.999-3.75-3.5 38.25-7.75 126.5-7.75 126.5H332C320.947 115.665 313.241 68 277.25 68h-137c-10.25 0-10.75 3.5-10.75 9.75V241.5c58 .5 88.5-2.5 88.5-2.5 29.77-.951 27.56-8.502 40.75-65.251h25.75c-4.407 101.351-3.91 61.829-1.75 160.25H257c-9.155-40.086-9.065-61.045-39.501-61.5 0 0-21.5-2-88-2v139c0 26 14.25 38.25 44.25 38.25H263c63.636 0 66.564-24.996 98.751-99.75H384z"/></svg>
    :'';
}
export default Icon;