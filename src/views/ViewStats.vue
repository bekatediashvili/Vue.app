<template>
    <div class="stats">
  <table class="table is-fullwidth">
    <thead>
        <tr>
            <th>Stats</th>
             <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Number of Notes </td>
            <td>{{store.totalNotesCount}} </td>
             </tr>
             <tr>
            <td>Number of Characters(of All Notes) </td>
            <td>{{store.totalCharchters}} </td>
             </tr>
         
    </tbody>
  </table>
  <input v-autofocus  v-model="newVal" class="input" type="text" placeholder="do you love Noteballs">
    </div>
</template>

<script setup>
import  { vAutofocus }  from '../components/directive/vAutoFocus.js'
import {useWatchCharachters} from '../use/useWatchChatachters'
import { useStoreNotes} from '../store/storeNotes'
import { ref } from '@vue/reactivity'

const newVal =ref('')

 useWatchCharachters(newVal,50)
const store = useStoreNotes()
</script>