<template>
    <div>
        <input type="text" :placeholder="placeholder">
    </div>
</template>
<script>
    export default {
        name: 'choose-item',
        props: {
            placeholder: {
                type: String,
                default: '请输入项目名称'
            }
        }
    }
</script>
<style></style>