import vue from 'vue'
import MessageComponent from './Message'


const MessageConstructor =  vue.extend(MessageComponent)
function showToast({text, type='info', duration = 2000}) {
    const toastDom = new MessageConstructor({
        el: document.createElement('div'),
        data () {
            return {
                isShow: true,
                text: text,
                type: type
            }
        }
    })
    document.body.appendChild(toastDom.$el)

    setTimeout(() => {
          toastDom.isShow = false
    },duration)
}
function Message() {
    vue.prototype.$Message = showToast
}
export default Message