<template>
  <div class="container shadow-lg rounded p-2 mt-3 mb-3">
    <div class="input-group p-1 mb-2">
        <input type="text" v-model="title" id="title" required class="form-control border-0 text-center font-weight-bold" placeholder="Title">
    </div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar rounded">
        <button
          class="btn-sm border-0 btn-outline-primary font-weight-bold m-1"
          :class="{ 'btn-primary text-white': isActive.bold() }"
          @click="commands.bold"
        >
        <font-awesome-icon icon="bold"/>
        </button>
        <button
          class="btn-sm border-0 font-italic btn-outline-primary m-1"
          :class="{ 'btn-primary text-white': isActive.italic() }"
          @click="commands.italic"
        >
        <font-awesome-icon icon="italic"/>
        </button>

        <button
          class="btn-sm border-0 btn-outline-primary m-1"
          :class="{ 'btn-primary text-white': isActive.strike() }"
          @click="commands.strike"
        >
        <font-awesome-icon icon="strikethrough"/>
        </button>

        <button
          class="btn-sm border-0 btn-outline-primary font-weight-bold m-1 font-underline"
          :class="{ 'btn-primary text-white': isActive.underline() }"
          @click="commands.underline"
        >
        <font-awesome-icon icon="underline"/>
        </button>

        <button
          class="btn-sm border-0 btn-outline-primary font-weight-bold m-1 font-underline"
          :class="{ 'btn-primary text-white': isActive.code() }"
          @click="commands.code"
        >
        <font-awesome-icon icon="code"/>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          :class="{ 'btn-primary text-white': isActive.paragraph() }"
          @click="commands.paragraph"
        >
        <font-awesome-icon icon="paragraph"/>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          :class="{ 'btn-primary text-white': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
        <strong>H1</strong>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          :class="{ 'btn-primary text-white': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
        <strong>H2</strong>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          :class="{ 'btn-primary text-white': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
        <strong>H3</strong>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          :class="{ 'btn-primary text-white': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
        <font-awesome-icon icon="list-ul"/>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          :class="{ 'btn-primary text-white': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
        <font-awesome-icon icon="list-ol"/>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          :class="{ 'btn-primary text-white': isActive.blockquote() }"
          @click="commands.blockquote"
        >
        <font-awesome-icon icon="quote-left"/>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          :class="{ 'btn-primary text-white': isActive.code_block() }"
          @click="commands.code_block"
        >
        <strong class="font-weight-bold">>_</strong>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          @click="commands.horizontal_rule"
        >
        <strong>——</strong>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          @click="commands.undo"
        >
        <font-awesome-icon icon="undo"/>
        </button>

        <button
          class="btn-sm btn-outline-primary border-0 m-1"
          @click="commands.redo"
        >
        <font-awesome-icon icon="redo"/>
        </button>
      </div>
    </editor-menu-bar>
    <editor-content class="mt-2 shadow rounded" :editor="editor"/>
    <button class="mt-3 btn btn-block btn-outline-primary" type="submit" @click="submit"><strong>Publish</strong></button>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar  
    },
  data() {
    return {
      title:"",
      editor: new Editor({
        extensions: [
            new Blockquote(),
            new BulletList(),
            new CodeBlock(),
            new HardBreak(),
            new Heading({ levels: [1, 2, 3] }),
            new HorizontalRule(),
            new ListItem(),
            new OrderedList(),
            new TodoItem(),
            new TodoList(),
            new Link(),
            new Bold(),
            new Code(),
            new Italic(),
            new Strike(),
            new Underline(),
            new History()
        ],
        content:"",
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
        },
      }),
      json: '',
      html: ''
    }
  },
    beforeDestroy() {
        this.editor.destroy()
    },
    methods: {
        showImagePrompt(command) {
        const src = prompt('Enter the url of your image here')
        if (src !== null) {
            command({ src })
        }
    },
    submit(){
       this.$emit("publishPost",{title:this.title, body:this.html})
    }
    },
    created(){
    }
}
</script>
<style>
.ProseMirror{
 min-height: 300px;
 padding:1em;
}
</style>