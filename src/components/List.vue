<template>
    <div >
            <h6 v-for="(item,index) in items" :key="index">
                {{item.name}}
            </h6>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['items']
}
</script>

<style >
    #comics h6 {
        background: linear-gradient(180deg,#ffedbc  ,#ed4264);
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        -webkit-text-decoration-color: #ffedbc !important;
        text-decoration-color: #ffedbc !important;
        font-weight: 700;
        padding-bottom: .15rem;
    }
    #series h6 {
        background: linear-gradient(180deg,#c4e0e5  ,#4ca1af );
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        -webkit-text-decoration-color: #c4e0e5 !important;
        text-decoration-color: #c4e0e5 !important;
        font-weight: 700;
        padding-bottom: .15rem;
    }
     #stories h6 {
        background: linear-gradient(180deg,#e7f6f8  ,#b06ab3 );
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        -webkit-text-decoration-color: #4568dc  !important;
        text-decoration-color: #4568dc  !important;
        font-weight: 700;
        padding-bottom: .15rem;
    }
</style>
