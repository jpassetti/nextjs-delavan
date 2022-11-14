import classNames from 'classnames/bind'
import styles from './wordmark.module.scss';

let cx = classNames.bind(styles);

const Wordmark = ({color="black"}) => {
    let wordmarkClasses = cx({
        wordmark: true,
        white: color === 'white',
        black: color === 'black',
    });
    return <svg className={wordmarkClasses} x="0px" y="0px"
         viewBox="0 0 410.14 45.59" xmlSpace="preserve">
    <g>
        <path d="M0,45V2.34h13.74c3.77,0,7.16,0.85,10.17,2.56c3.01,1.71,5.36,4.12,7.05,7.24c1.69,3.12,2.54,6.61,2.56,10.47v1.96
            c0,3.91-0.83,7.41-2.48,10.5c-1.65,3.1-3.97,5.52-6.97,7.27c-3,1.75-6.34,2.63-10.03,2.65H0z M10.28,10.28v26.81h3.57
            c2.95,0,5.21-1.05,6.8-3.15c1.58-2.1,2.37-5.22,2.37-9.36v-1.85c0-4.12-0.79-7.23-2.37-9.32s-3.89-3.13-6.91-3.13H10.28z"/>
        <path d="M52.71,45.59c-4.86,0-8.8-1.45-11.81-4.35c-3.01-2.9-4.51-6.67-4.51-11.32v-0.82c0-3.24,0.6-6.1,1.8-8.58
            s2.95-4.4,5.26-5.76c2.3-1.36,5.04-2.04,8.2-2.04c4.45,0,7.97,1.38,10.55,4.15c2.58,2.76,3.87,6.62,3.87,11.56v3.84H46.44
            c0.35,1.78,1.12,3.17,2.31,4.19c1.19,1.02,2.73,1.52,4.63,1.52c3.12,0,5.57-1.09,7.32-3.28l4.51,5.33
            c-1.23,1.7-2.97,3.05-5.23,4.06S55.31,45.59,52.71,45.59z M51.6,20.33c-2.89,0-4.61,1.91-5.16,5.74h9.96v-0.76
            c0.04-1.58-0.36-2.81-1.2-3.68C54.36,20.77,53.16,20.33,51.6,20.33z"/>
        <path d="M79.88,45h-9.9V0h9.9V45z"/>
        <path d="M103.06,45c-0.35-0.64-0.66-1.59-0.94-2.84c-1.82,2.29-4.36,3.43-7.62,3.43c-2.99,0-5.53-0.9-7.62-2.71
            c-2.09-1.81-3.13-4.08-3.13-6.81c0-3.44,1.27-6.04,3.81-7.79c2.54-1.76,6.23-2.64,11.07-2.64h3.05v-1.68
            c0-2.92-1.26-4.39-3.78-4.39c-2.34,0-3.52,1.16-3.52,3.47h-9.87c0-3.06,1.3-5.55,3.91-7.46c2.61-1.91,5.93-2.87,9.98-2.87
            s7.24,0.99,9.58,2.96s3.54,4.68,3.6,8.12v14.03c0.04,2.91,0.49,5.14,1.35,6.68V45H103.06z M96.88,38.55c1.23,0,2.25-0.26,3.06-0.79
            c0.81-0.53,1.39-1.12,1.74-1.79v-5.07h-2.87c-3.44,0-5.16,1.54-5.16,4.63c0,0.9,0.3,1.63,0.91,2.18
            C95.17,38.28,95.94,38.55,96.88,38.55z"/>
        <path d="M127.92,33.25l5.01-19.95h10.4L132.99,45h-10.08l-10.34-31.7H123L127.92,33.25z"/>
        <path d="M162.61,45c-0.35-0.64-0.66-1.59-0.94-2.84c-1.82,2.29-4.36,3.43-7.62,3.43c-2.99,0-5.53-0.9-7.62-2.71
            c-2.09-1.81-3.13-4.08-3.13-6.81c0-3.44,1.27-6.04,3.81-7.79c2.54-1.76,6.23-2.64,11.07-2.64h3.05v-1.68
            c0-2.92-1.26-4.39-3.78-4.39c-2.34,0-3.52,1.16-3.52,3.47h-9.87c0-3.06,1.3-5.55,3.91-7.46c2.61-1.91,5.93-2.87,9.98-2.87
            s7.24,0.99,9.58,2.96s3.54,4.68,3.6,8.12v14.03c0.04,2.91,0.49,5.14,1.35,6.68V45H162.61z M156.43,38.55
            c1.23,0,2.25-0.26,3.06-0.79c0.81-0.53,1.39-1.12,1.74-1.79v-5.07h-2.87c-3.44,0-5.16,1.54-5.16,4.63c0,0.9,0.3,1.63,0.91,2.18
            C154.72,38.28,155.49,38.55,156.43,38.55z"/>
        <path d="M185.24,13.3l0.32,3.72c2.19-2.87,5.2-4.31,9.05-4.31c3.3,0,5.77,0.99,7.4,2.96c1.63,1.97,2.48,4.94,2.53,8.91V45h-9.9
            V24.99c0-1.6-0.32-2.78-0.97-3.53c-0.64-0.75-1.82-1.13-3.52-1.13c-1.93,0-3.37,0.76-4.31,2.29V45h-9.87V13.3H185.24z"/>
        <path d="M251.71,34.51c0-2.36-0.83-4.23-2.49-5.61s-4.7-2.68-9.11-3.93c-4.41-1.24-7.64-2.59-9.67-4.06
            c-2.89-2.07-4.34-4.79-4.34-8.14c0-3.26,1.34-5.91,4.03-7.95c2.69-2.04,6.12-3.06,10.3-3.06c2.83,0,5.37,0.55,7.6,1.64
            s3.97,2.62,5.2,4.57s1.85,4.13,1.85,6.53h-3.63c0-2.92-1-5.26-2.99-7.04c-1.99-1.77-4.67-2.66-8.03-2.66
            c-3.26,0-5.86,0.73-7.79,2.19c-1.93,1.46-2.9,3.36-2.9,5.71c0,2.17,0.87,3.94,2.61,5.31s4.52,2.58,8.35,3.62
            c3.83,1.05,6.73,2.13,8.7,3.25c1.97,1.12,3.46,2.47,4.45,4.03s1.49,3.41,1.49,5.54c0,3.36-1.34,6.05-4.03,8.09
            s-6.23,3.05-10.62,3.05c-3.01,0-5.77-0.54-8.28-1.61s-4.41-2.58-5.71-4.51s-1.95-4.15-1.95-6.65h3.6c0,3.01,1.12,5.38,3.37,7.12
            s5.23,2.61,8.96,2.61c3.32,0,5.99-0.73,8-2.2S251.71,36.93,251.71,34.51z"/>
        <path d="M268.36,5.19v8.12h6.56v2.87h-6.56v21.15c0,1.76,0.32,3.07,0.95,3.93c0.63,0.86,1.69,1.29,3.18,1.29
            c0.59,0,1.53-0.1,2.84-0.29l0.15,2.85c-0.92,0.33-2.17,0.49-3.75,0.49c-2.4,0-4.15-0.7-5.24-2.09c-1.09-1.4-1.64-3.45-1.64-6.17
            V16.17h-5.83V13.3h5.83V5.19H268.36z"/>
        <path d="M300.66,40.99c-2.11,3.07-5.48,4.6-10.11,4.6c-3.38,0-5.95-0.98-7.71-2.94s-2.66-4.87-2.7-8.72V13.3h3.49v20.19
            c0,6.04,2.44,9.05,7.32,9.05c5.08,0,8.29-2.1,9.64-6.3V13.3h3.52V45h-3.4L300.66,40.99z"/>
        <path d="M310.53,28.86c0-4.92,1.1-8.84,3.3-11.76c2.2-2.92,5.18-4.38,8.95-4.38c4.28,0,7.54,1.69,9.79,5.07V0h3.49v45h-3.28
            l-0.15-4.22c-2.25,3.2-5.55,4.8-9.9,4.8c-3.65,0-6.6-1.47-8.83-4.41c-2.24-2.94-3.35-6.91-3.35-11.91V28.86z M314.08,29.47
            c0,4.04,0.81,7.23,2.43,9.57c1.62,2.33,3.91,3.5,6.86,3.5c4.32,0,7.38-1.9,9.2-5.71V21.94c-1.82-4.12-4.86-6.18-9.14-6.18
            c-2.95,0-5.24,1.16-6.88,3.47S314.08,24.96,314.08,29.47z"/>
        <path d="M343.41,4.15c0-0.66,0.21-1.22,0.64-1.67s1.02-0.68,1.76-0.68s1.33,0.23,1.77,0.68s0.66,1.01,0.66,1.67
            s-0.22,1.21-0.66,1.66c-0.44,0.45-1.03,0.67-1.77,0.67s-1.33-0.22-1.76-0.67C343.62,5.36,343.41,4.81,343.41,4.15z M347.54,45
            h-3.52V13.3h3.52V45z"/>
        <path d="M353.64,28.68c0-3.05,0.59-5.79,1.77-8.23s2.85-4.34,5.01-5.7c2.16-1.36,4.6-2.04,7.34-2.04c4.22,0,7.64,1.48,10.25,4.44
            s3.93,6.88,3.93,11.76v0.73c0,3.07-0.59,5.83-1.77,8.28c-1.18,2.45-2.85,4.34-5,5.67s-4.6,1.99-7.35,1.99
            c-4.2,0-7.61-1.48-10.24-4.44s-3.94-6.88-3.94-11.76V28.68z M357.15,29.65c0,3.79,0.98,6.9,2.94,9.33s4.54,3.65,7.72,3.65
            c3.16,0,5.73-1.22,7.69-3.65s2.94-5.64,2.94-9.62v-0.67c0-2.42-0.45-4.64-1.35-6.65s-2.16-3.57-3.78-4.67
            c-1.62-1.1-3.48-1.66-5.57-1.66c-3.12,0-5.67,1.23-7.65,3.68c-1.97,2.45-2.96,5.66-2.96,9.62V29.65z"/>
        <path d="M406.63,36.94c0-1.74-0.7-3.13-2.09-4.19s-3.5-1.88-6.31-2.48c-2.81-0.6-5-1.28-6.55-2.05c-1.55-0.77-2.71-1.71-3.46-2.83
            s-1.13-2.46-1.13-4.04c0-2.5,1.04-4.57,3.13-6.2c2.09-1.63,4.77-2.45,8.03-2.45c3.54,0,6.37,0.88,8.51,2.62
            c2.14,1.75,3.21,4.03,3.21,6.84h-3.52c0-1.86-0.78-3.4-2.33-4.63s-3.51-1.85-5.87-1.85c-2.3,0-4.16,0.51-5.55,1.54
            s-2.09,2.36-2.09,4c0,1.58,0.58,2.81,1.74,3.68c1.16,0.87,3.28,1.67,6.36,2.39s5.38,1.49,6.91,2.31s2.67,1.81,3.41,2.96
            s1.11,2.55,1.11,4.19c0,2.68-1.08,4.81-3.24,6.42s-4.98,2.4-8.45,2.4c-3.69,0-6.68-0.89-8.98-2.68s-3.44-4.05-3.44-6.78h3.52
            c0.14,2.05,1,3.65,2.59,4.79s3.7,1.71,6.31,1.71c2.44,0,4.41-0.54,5.92-1.61S406.63,38.58,406.63,36.94z"/>
    </g>
    </svg>
    
}
export default Wordmark;