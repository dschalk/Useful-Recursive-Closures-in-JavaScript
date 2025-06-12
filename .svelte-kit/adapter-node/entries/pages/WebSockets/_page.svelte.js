import { c as create_ssr_component, b as add_attribute, d as each, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".checked.svelte-1s7lgad{text-decoration:line-through}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["\\n<script>\\n  let newItem = '';\\n\\n  let todoList = [{text: 'Write my first post', status: true},\\n                  {text: 'Upload the post to the blog', status: false},\\n                  {text: 'Publish the post at Facebook', status: false}];\\n\\nfunction addToList() {\\n  todoList = [...todoList, {text: newItem, status: false}];\\n  newItem = '';\\n}\\n\\nfunction removeFromList(index) {\\n  todoList.splice(index, 1)\\n  todoList = todoList;\\n  }\\n<\/script>\\n\\n<input bind:value={newItem} type=\\"text\\" placeholder=\\"new todo item..\\">\\n<button on:click={addToList}>Add</button>\\n\\n<br/>\\n{#each todoList as item, index}\\n<input bind:checked={item.status} type=\\"checkbox\\">\\n<span class:checked={item.status}>{item.text}</span>\\n<span style=\\"color:magenta\\" on:click={() => removeFromList(index)}>remove</span>\\n<br/>\\n{/each} \\n\\n\\n<style> \\n.checked {\\n      text-decoration: line-through;\\n  }\\n</style> "],"names":[],"mappings":"AAgCA,uBAAS,CACH,eAAe,CAAE,YACrB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newItem = "";
  let todoList = [
    {
      text: "Write my first post",
      status: true
    },
    {
      text: "Upload the post to the blog",
      status: false
    },
    {
      text: "Publish the post at Facebook",
      status: false
    }
  ];
  $$result.css.add(css);
  return `<input type="text" placeholder="new todo item.."${add_attribute("value", newItem, 0)}> <button data-svelte-h="svelte-1l6la3">Add</button> <br> ${each(todoList, (item, index) => {
    return `<input type="checkbox"${add_attribute("checked", item.status, 1)}> <span class="${["svelte-1s7lgad", item.status ? "checked" : ""].join(" ").trim()}">${escape(item.text)}</span> <span style="color:magenta" data-svelte-h="svelte-1go0bdz">remove</span> <br>`;
  })}`;
});
export {
  Page as default
};
