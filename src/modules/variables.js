const toDoList = localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : [];
const container = document.querySelector('ul');
const form = document.querySelector('form');
const newTaskInput = document.getElementById('new-task');
const newTaskBtn = document.getElementById('add');
const clearBtn = document.querySelector('#btn');

export {
  toDoList, container, form, newTaskInput, newTaskBtn, clearBtn,
};