import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import anime from 'animejs'
import { useEffect } from 'react'


function App () {

    useEffect(() => {
        anime({
            targets: '.box',
            width: '200px',
            height: '200px',
            backgroundColor: '#e74c3c', 
            duration: 1000,
            loop: true, // 无限循环
            direction: 'alternate', // 反向播放
            complete: function(anim) {
                console.log('动画完成！');
            },
            begin: function(anim) {
                console.log('开始动画')
             },
            update: function(anim) {
              console.log('更新，实时监测动画状态')
            }
        });
    }, [])

    return <>
        <div className="box"></div>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
