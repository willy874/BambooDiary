import m from 'mithril'
import Header from './header'
import Footer from './footer'
import {Dialog} from '@base/components'
import * as createApp from '../createApp'

class LayoutPage {
    constructor(vnode){
    }
    view(vnode){
        const {
            control,
            model,
            status
        } = vnode.attrs
        return m('.body',[
            m(Header,{
                control,
                model,
                status
            }),
            m.fragment({
                onbeforeremove(){
                    
                }
            },vnode.children),
            m(Footer,{
                control,
                model,
                status
            }),
            m(Dialog,{
                control,
                model,
                status
            },'dialog')
        ])
    }
}

//Layout設定
export default function Layout(Page){
    return class {
        constructor() {
            this.control = createApp.control
            this.model = createApp.model
            this.status = createApp.status
        }
        oninit(vnode){
            this.model.modelCreate()
        }
        view(vnode){
            return m(LayoutPage,{
                control: this.control,
                model: this.model,
                status: this.status
            },[
                m(Page,{
                    control: this.control,
                    model: this.model,
                    status: this.status
                })
            ])
        }
    }
}