<template>
    <div class="card  p-4 mb-5"
    :class="`has-background-${ bgColor}-dark`"
    >
    <label v-if="label" class="label has-text-white">{{label}}</label>

                <div class="field">

      <div class="control">
        <textarea maxlength="100" v-autofocus v-model="modelValue" @input="$emit('update:modelValue',modelValue)"
         ref="textAreaRef" class="textarea"
          :placeholder="placeHolder"></textarea>
      </div>
    </div>



    <div class="field is-grouped is-grouped-right">
      <div class="control">
     <slot name="buttons"></slot>
      </div>
    
    </div>
    </div>
    
     
</template>

<script setup>
import { ref }from 'vue'
import  { vAutofocus }  from '../directive/vAutoFocus.js'

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor:{
      type:String,
      default:'success'
    },
    placeHolder:{
      type: String,
      default: 'Type Something'
    },
    label:{
      type:String
    }
});




const emit = defineEmits(['update:modelValue']);

const textAreaRef = ref(null)

const focusEditText = () =>{
 textAreaRef.value.focus()
}

defineExpose({
  focusEditText
})




</script>