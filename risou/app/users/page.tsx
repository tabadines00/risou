"use client"
import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"


interface User {
	id: number;
	name: string;

}

const sections = [
	{
		id: 'education',
		sectionType: 'header',
		title: 'Education',
		content: 'San Francisco State University'
	},
	{
		id: 'experience',
		sectionType: 'header',
		title: 'Relevant Experience',
		content: ''
	},
	{
		id: 'projects',
		sectionType: 'header',
		title: 'Relevant Projects',
		content: ''
	}
]

const UsersPage = () => {

	const [sectionOrder, setSectionOrder] = useState(sections)
	const [domReady, setDomReady] = useState(false)
	
	useEffect(() => {
		setDomReady(true)
	}, [])

	function handleOnDragEnd(result) {
		if(!result.destination) {
			return
		}
		console.log(result)
		const items = Array.from(sectionOrder)
		const [reorderedItem] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, reorderedItem)
		setSectionOrder(items)
	}

	//const res = await fetch(
	//	'https://jsonplaceholder.typicode.com/users',
	//	{ next: { revalidate: 10 }})
	//const users: User[] = await res.json();

	 
	return (
		<div>
		{domReady ? <DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId='sections'>
				{(provided) => (
				<ul {...provided.droppableProps} ref={provided.innerRef}>
					{sectionOrder.map((section, index) => {
						return (
							<Draggable key={section.id} draggableId={section.id} index={index}>
								{(provided) => (
									<li>
										<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
										className='p-4 bg-slate-500'>
											<h1>{section.title}</h1>
										</div>
									</li>
								)}
							</Draggable>
						)
					})}
					{provided.placeholder}
				</ul>
				)}
			</Droppable>
		</DragDropContext> : null}
		</div>
	)
}

export default UsersPage