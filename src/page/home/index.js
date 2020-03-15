import m from 'mithril'
import classNames from 'classnames'
import TabNavbar from '../component/tab-navbar'

export default class Home {
    constructor(vnode){

    }
    oncreate(vnode){
        fetch('./dist/data/portfolio.json').then((response) => {
            response.json().then((data)=> {
                vnode.attrs.model.portfolio = data
                m.redraw()
            })
        })
    }
    view(vnode){
        const {
            control,
            model,
            status
        } = vnode.attrs
        const portfolio = model.portfolio
        console.log(model)
        return m('div',{
            class: 'main home'
        },[
            m('section.sec1',[
                m('h2',[
                    m('span','追尋極限的技術'),
                    m('br'),
                    m('span','創造屬於我自己')
                ])
            ]),
            m('section.sec2',[
                m('section.sec3-container',[
                    m('.sec2-heading',{
                        class: classNames('')
                    },[
                        m('h2',[
                            m('span.h2-en','About'),
                            m('span.h2-ch','關於竹子')
                        ])
                    ]),
                    m('.sec2-row',{
                        class: classNames('')
                    },[
                        m('div',{
                            class: classNames('sec2-row-col','img-block')
                        },[
                            m('img',{
                                src: './images/about/Self-portrait-01.jpg',
                                alt: '竹子照片',
                                style: {
                                    width: '100%'
                                }
                            })
                        ]),
                        m('div',{
                            class: classNames('sec2-row-col','text-block')
                        },[
                            m(TabNavbar,{
                                options: [{
                                    title: '個人資訊',
                                    panel: m('div',[
                                        m('p',[
                                            m('ul',[
                                                m('li','專長： 電機維修、監控系統、影音剪輯、前端工程'),
                                                m('li','興趣： 旅遊拍照、寫作、閱讀、寫程式、交流趣聞')
                                            ])
                                        ])
                                    ])
                                },{
                                    title: '隨筆雜談',
                                    panel: m('div',[
                                        m('p',`一開始基於興趣開始學習架站，本身是機電工程的我跨領域學習前端開發，嘗試各種不同的語言和套件。然而，對於一個的工程師，不外乎最痛苦的就是資源匱乏。 前端最大的優點就是"看的到"，馬上就能知道結果。一路沒有任何幫助到真正進職場就業能讓前輩引導也是熬了許久。 0到1是最為困難的，只能仰賴大量的嘗試與練習，直到熟手並掌握。因而，找尋"解決問題"的方法尤為重要，或許也是因為這樣，獨創不少個人手法和道路。`),
                                        
                                    ])
                                },{
                                    title: '前端技能',
                                    panel: m('div',[
                                        m('p',[
                                            m('ul',[
                                                m('li','主修CSS排版： Flex'),
                                                m('li','主修CSS框架： Bootstrap'),
                                                m('li','CSS預處理器： SCSS'),
                                                m('li','主修JS框架： Mithril'),
                                                m('li','圖形繪製： Div、SVG'),
                                                m('li','合作後端： C#、PHP'),
                                                m('li','打包工具： webpack')
                                            ])
                                        ]),
                                        
                                    ])
                                }]
                            }),
                            m('.sec2-row-col-btn',[
                                m('button[type=button]','MORE')
                            ])
                            
                        ])
                    ])
                ])
            ]),
            m('section.sec3',[
                m('section.sec3-container',[
                    m('.sec3-heading',{
                        class: classNames('')
                    },[
                        m('h2',[
                            m('span.h2-en','Portfolio'),
                            m('span.h2-ch','作品集')
                        ])
                    ]),
                    m('.sec3-row',{
                        class: classNames('')
                    },portfolio.map(item=>{
                        return m('div',{
                            class: classNames('sec3-row-col')
                        },[
                            item.text
                        ])
                    }))
                ])
            ]),
            m('section.sec4',['']),
            m('section.sec5',['']),
        ])
    }

}