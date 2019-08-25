<template>
    <div class="page-helper">
        <div class="page-label">共{{this.total}}条</div>
        <ul class="page-ul">
            <li :class="['page-item',{'page-item-disabled' : index=== 1}]" @click="first">
                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
            </li>
            <li :class="['page-item',{'page-item-disabled' : index=== 1}]" @click="prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </li>
            <li class="page-item" v-if="this.showPrevMore">...</li>
            <li :class="['page-item',{'page-item-current' : index === pager}]" v-for="pager in pagers" :key="pager"  @click="go(pager)">{{pager}}</li>
            <li class="page-item" v-if="this.showNextMore">...</li>
            <li :class="['page-item',{'page-item-disabled' : index === pages}]" @click="next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </li>
            <li :class="['page-item',{'page-item-disabled' : index === pages}]" @click="last">
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </li>

            <li class="page-label">共{{this.pages}}页</li>
            <li class="page-label">跳转到 <input type="text" style="width: 20px" v-model.number="toPageNum"/>页<i class="fa fa-share" aria-hidden="true" @click="gotoPage"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "PageHelper",
        data(){
            return {
                index: this.pageIndex,
                limit: this.pageSize,
                size: this.total || 1,
                showPrevMore:false,
                showNextMore: false,
                toPageNum:'',
            }
        },
        props:{
            //页面中可见页码，其他的以...替代
            perPages: {
                type: Number,
                default: 5
            },
            //当前页码
            pageIndex: {
                type: Number,
                default: 1
            },
            //每页显示条数
            pageSize: {
                type: Number,
                default: 10
            },
            //总条数
            total: {
                type: Number,
                default: 1
            }
        },
        methods: {
            prev(){
                if (this.index >1){
                    this.go(this.index -1)
                }
            },
            next(){
                if(this.index < this.pages){
                    this.go(this.index + 1)
                }
            },
            first(){
                if(this.index != 1){
                    this.go(1)
                }
            },
            last(){
                if(this.index != this.pages){
                    this.go(this.pages)
                }
            },
            go(page){
                if(this.index != page){
                    this.index = page
                    this.$emit('change',this.index)
                }
            },
            setShowPrevMore(val){
                this.showPrevMore = val
            },
            setShowNextMore(val){
                this.showNextMore = val
            },
            gotoPage(){
                if(this.toPageNum != ''){
                    this.go(this.toPageNum)
                }
            }
        },
        computed: {
            pages(){
                return Math.ceil(this.size/this.limit)
            },
            //计算页码，当count等变化的时候自动计算
            pagers() {
                const array =[]
                const perPages = this.perPages
                const pageCount = this.pages
                let current = this.index
                const _offset = (perPages -1 )/2
                const offset = {
                    start : current - _offset,
                    end : current + _offset
                }
                //如果开始页码小于1，或者结束页码大于页码总数
                if(offset.start < 1){
                    offset.end  = offset.end + (1 - offset.start)
                    offset.start = 1
                }
                if(offset.end > pageCount){
                    offset.start = offset.start - (offset.end - pageCount)
                    offset.end = pageCount
                }
                if(offset.start < 1){
                    offset.start = 1
                }
                this.setShowPrevMore(offset.start > 1)
                this.setShowNextMore(offset.end < pageCount)

                for(let i = offset.start;i <= offset.end; i++){
                    array.push(i)
                }
                return array
            },
        },
        watch : {
            pageIndex(val){
                this.index= val || 1
            },
            pageSize(val){
                this.limit = val || 10
            },
            total(val){
                this.size = val || 1
            }
        }
    }
</script>

<style scoped>
    .page-helper{
        margin: 10px 0px;
        height: 20px;
        color: #3c3c3c;
    }
    .page-ul {
        display: inline-block;
        list-style: none;
        float: right;
    }
    .page-label{
        display: inline;
        position: relative;
        margin: 3px;
        padding:0px 5px;
    }
    .page-item{
        display: inline;
        position: relative;
        margin: 3px;
        padding:0px 5px;
        font:14px "Microsoft YaHei";
        border: 1px solid #ceced6;
        cursor: pointer;
    }
    .page-item-current{
        color: white;
        background-color: #22487f;
    }
    .page-item-disabled{
        display: none;
    }
</style>