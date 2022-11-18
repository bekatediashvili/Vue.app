import {watch} from 'vue'
export function useWatchCharachters(valueToWatch,maxChars =100) {
    watch(valueToWatch, (newVal)=>{
if (newVal.length === maxChars){
    alert(`It is Already ${maxChars} Charachters` )
}
})
}