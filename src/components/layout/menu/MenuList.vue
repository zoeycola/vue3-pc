<template>
  <div class="mt-10 pl-6 pr-6" v-for="(menuItem,index) in menus" :key="index">
    <div class="menu-title text-sm pb-2 text-main">{{ menuItem.name }}</div>
    <div class="menu-item text-base hover-bg-main" 
      v-for="(menu,index) in menuItem.menus" 
      :key="'menu'+index"
      :class="{'active': currentKey == menu.key }"
      @click="click(menu)"
    >
      <IconPark :icon="menu.icon" size="18" :theme="menu.theme"/>
      <span class="ml-1">{{ menu.name }}</span>
    </div>
  </div>
  <!-- <div ref="root">This is a root element</div>
  <div v-for="(item,index) in author" :key="index">
    {{ item.name }}
    <p v-for="(n,index) in item.books" :key="'z'+index">{{ n }}</p>
  </div>
  <div>
    <p :class="classObj">Has published books:</p>
    <span>computed ---{{ publishedBooksMessage }}</span>
  </div> -->
</template>

<script setup lang="ts">
import { useMenu } from "@/components/layout/menu/useMenu.js";
import IconPark from "@/components/common/IconPark.vue";
import { ref, onMounted, reactive, watch, watchEffect, computed } from 'vue';
const { menus, currentKey, click } = useMenu()

const root = ref(null)
const firstName = ref('John')
const lastName = ref('Doe')
const obj = reactive({count: 0})
const classObj = reactive({
  'active': false,
  'text-danger':true
})

const author = reactive([
  {
    name: 'John Doe',
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  }
])

const authorObj = reactive(
  {
    name: 'John Doe',
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  }
)

// onMounted(()=>{
//   console.log(root.value, 'root')
// })

/**
 * 一个计算属性,计算属性值会基于响应式依赖被缓存,一个计算属性会在其响应式依赖更新时才会重新计算，只要author.books不改变
 * 无论访问多少次publishedBooksMessage，都只会立即返回计算值，不会重复执行getter函数
 * */
const publishedBooksMessage = computed(()=> {
  return authorObj.books.length > 0 ? 'YES':'NO'
})

/**
 * 可写属性计算
 */
const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newval) {
    [firstName.value, lastName.value] = newval.split(' ')
  }
})

fullName.value = 'shayen Deep'

console.log(firstName, lastName, 'fullName')

/**
 * 提供一个getter函数
 */

 watch(
  ()=> obj.count,
  (count) =>{
    console.log(`count is ${count}`)
  }
 )

 /**
  * 深度监听对象
  */
 watch(obj,(newval,oldval)=>{
  console.log(newval, 'newval')
  console.log(oldval, 'oldval')
 })

 watch(
  // 仅当 state.someObject 被替换时触发
  () => obj,
  ()=> {
    console.log(obj, 'newObj')
  }
 )

 watch(
  // 仅当 state.someObject 被替换时触发
  () => obj,
  (newValue, oldValue) => {
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // *除非* state.someObject 被整个替换了
    console.log(oldValue, '强制转成深层oldValue')
  },
  { deep: true }
 )

 watch(
  // 仅当 state.someObject 被替换时触发
  () => obj,
  (newValue, oldValue) => {
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // *除非* state.someObject 被整个替换了
    console.log(oldValue, '强制转成深层oldValue')
  },
  { immediate: true } //即使监听器 ，watch是惰性的，只有数据发生变化的时候才会执行回调，添加此属性立即执行回调
 )

 /**
  * 自动跟踪响应式依赖
  */
const todoId = ref(1)
const resData = ref(null)
watchEffect(async() => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  resData.value = await response.json()
  console.log(resData, 'resData')
})



 obj.count = 199
 obj.count ++


watchEffect(()=> {
   // 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
  console.log(root.value, 'watchEffect--root')
},{
  flush: 'post' //添加此属性，在dom更新后运行副作用，确保模版引用和dom同步
})

/**
 * watchh和watchEffect的区别
 * 
 */

 


</script>

<style lang="scss">
.menu-item {
  @apply flex cursor-pointer items-center transition-colors pt-1.5 pb-1.5 pl-4 pr-4 rounded;
}
.active{
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
.text-danger{
  @apply bg-gradient-to-tr from-orange-400 to-orange-100 text-slate-50 cursor-default;
}
</style>