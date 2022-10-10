import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import API from './API';
jest.mock("axios");

const dummyTodos = [
{
userId: 1,
id: 1,
title: "todo 1",
completed: false,
},
{
userId: 1,
id: 2,
title: "todo 2",
completed: false,
},
{
userId: 1,
id: 3,
title: "todo 3",
completed: false,
},
];
// test('title must be rendered', async()=>{

//       render(<Todos/>)
//       const todoList = await screen.findByText('delectus aut autem')
      
//       expect(todoList).toBeInTheDocument()
       
// })
test("todos list", async () => {
    axios.get.mockResolvedValue({ data: dummyTodos });
    render(<API />);
    
    const todoList = await waitFor(() => screen.findAllByTestId("todo1"));
    
    expect(todoList).toHaveLength(3);
});