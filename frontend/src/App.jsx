import React, { useRef, useState } from "react";
import Item from "./Item";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// function App() {
//   const [inputItems, setInputItems] = useState([
//     { id: "textInput", label: "textInput" },
//     { id: "checkbox", label: "checkbox" },
//     { id: "radioButton", label: "radioButton" },
//     { id: "textArea", label: "textArea" },
//     { id: "dropdown", label: "dropdown" },
//     { id: "datePicker", label: "datePicker" },
//     { id: "fileUpload", label: "fileUpload" },
//   ]);

//   const [canvasItems, setCanvasItems] = useState([]);

//   function onDragEnd(result) {
//     const { source, destination } = result;

//     if (!destination) return;

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     if (source.droppableId === "inputItemsArea") {
//       const newItem = {
//         ...inputItems[source.index],
//         id: `${inputItems[source.index].id}-${Date.now()}`,
//       };
//       const updatedCanvasItems = [...canvasItems];
//       updatedCanvasItems.splice(destination.index, 0, newItem);
//       setCanvasItems(updatedCanvasItems);
//     } else {
//       const updatedCanvasItems = [...canvasItems];
//       const [movedItem] = updatedCanvasItems.splice(source.index, 1);
//       updatedCanvasItems.splice(destination.index, 0, movedItem);
//       setCanvasItems(updatedCanvasItems);
//     }
//   }

//   function handleButtonClick() {
//     console.log("yooo");
//   }

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="app">
//         <div
//           className="container"
//           style={{ display: "flex", justifyContent: "space-around" }}
//         >
//           {/* form canvas area*/}
//           <Droppable droppableId="canvasItemsArea">
//             {(provided) => (
//               <div
//                 className="canvasItems"
//                 style={{ backgroundColor: "coral" }}
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 <span className="inputItems">Form Canvas</span>
//                 {canvasItems.map((canvasItem, index) => {
//                   return (
//                     <Item
//                       id={canvasItem.id}
//                       index={index}
//                       key={canvasItem.id}
//                       label={canvasItem.label}
//                     />
//                   );
//                 })}
//                 {provided.placeholder}
//                 <button onClick={handleButtonClick}>Submit</button>
//               </div>
//             )}
//           </Droppable>

//           {/* input items area*/}
//           <Droppable droppableId="inputItemsArea">
//             {(provided) => (
//               <div
//                 className="inputItems"
//                 style={{ backgroundColor: "cadetblue" }}
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 <span className="inputItems">Inputs</span>
//                 {inputItems.map((inputItem, index) => {
//                   return (
//                     <Item
//                       id={inputItem.id}
//                       index={index}
//                       key={inputItem.id}
//                       label={inputItem.label}
//                     />
//                   );
//                 })}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </div>
//     </DragDropContext>
//   );
// }

// export default App;

// import React, { useState, useRef } from "react";
// import Item from "./Item";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";

// function App() {
// const [inputItems, setInputItems] = useState([
//   { id: "textInput", label: "textInput" },
//   { id: "checkbox", label: "checkbox" },
//   { id: "radioButton", label: "radioButton" },
//   { id: "textArea", label: "textArea" },
//   { id: "dropdown", label: "dropdown" },
//   { id: "datePicker", label: "datePicker" },
//   { id: "fileUpload", label: "fileUpload" },
// ]);

// const [canvasItems, setCanvasItems] = useState([]);
// const canvasFormRef = useRef(null);

// // function onDragEnd(result) {
// //   const { source, destination } = result;

// //   if (!destination) return;

// //   if (
// //     destination.droppableId === source.droppableId &&
// //     destination.index === source.index
// //   ) {
// //     return;
// //   }

// //   if (source.droppableId === "inputItemsArea") {
// //     // Add a unique ID for items added to the canvas
// //     const newItem = {
// //       ...inputItems[source.index],
// //       id: `${inputItems[source.index].id}-${Date.now()}`, // Unique ID for canvas items
// //     };
// //     const updatedCanvasItems = [...canvasItems];
// //     updatedCanvasItems.splice(destination.index, 0, newItem);
// //     setCanvasItems(updatedCanvasItems);
// //   } else if (source.droppableId === "canvasItemsArea") {
// //     // Handle reordering items within the canvas
// //     const updatedCanvasItems = [...canvasItems];
// //     const [movedItem] = updatedCanvasItems.splice(source.index, 1);
// //     updatedCanvasItems.splice(destination.index, 0, movedItem);
// //     setCanvasItems(updatedCanvasItems);
// //   }
// // }
// function onDragEnd(result) {
//   const { source, destination } = result;

//   if (!destination) return;

//   if (
//     destination.droppableId === source.droppableId &&
//     destination.index === source.index
//   ) {
//     return;
//   }

//   if (
//     source.droppableId === "inputItemsArea" &&
//     destination.droppableId === "canvasItemsArea"
//   ) {
//     const newCanvasItem = {
//       ...inputItems[source.index],
//       id: `${inputItems[source.index].id}-${Date.now()}`,
//     };

//     const updatedCanvasItems = [...canvasItems];
//     updatedCanvasItems.splice(destination.index, 0, newCanvasItem);
//     setCanvasItems(updatedCanvasItems);
//   } else if (source.droppableId === "canvasItemsArea") {
//     const updatedCanvasItems = [...canvasItems];
//     const [movedItem] = updatedCanvasItems.splice(source.index, 1);
//     updatedCanvasItems.splice(destination.index, 0, movedItem);
//     setCanvasItems(updatedCanvasItems);
//   }
// }

// function handleSubmit(e) {
//   e.preventDefault();
//   if (canvasFormRef.current) {
//     const formData = new FormData(canvasFormRef.current);

//     const formValues = {};
//     formData.forEach((value, key) => {
//       if (formValues[key]) {
//         if (Array.isArray(formValues[key])) {
//           formValues[key].push(value);
//         } else {
//           formValues[key] = [formValues[key], value];
//         }
//       } else {
//         formValues[key] = value;
//       }
//     });

//     console.log("Form Values:", formValues);
//   }
// }

// function mergeRefs(...refs) {
//   return (node) => {
//     refs.forEach((ref) => {
//       if (typeof ref === "function") {
//         ref(node);
//       } else if (ref) {
//         ref.current = node;
//       }
//     });
//   };
// }

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="app">
//         <div
//           className="container"
//           style={{ display: "flex", justifyContent: "space-around" }}
//         >
//           {/* Form canvas area */}
//           <Droppable droppableId="canvasItemsArea">
//             {(provided) => (
//               <form
//                 onSubmit={handleSubmit}
//                 ref={mergeRefs(canvasFormRef, provided.innerRef)}
//                 className="canvasItems"
//                 style={{
//                   backgroundColor: "coral",
//                   padding: "10px",
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//                 {...provided.droppableProps}
//               >
//                 <span className="inputItems">Form Canvas</span>
//                 {canvasItems.map((canvasItem, index) => (
//                   <Item
//                     id={canvasItem.id}
//                     index={index}
//                     key={canvasItem.id}
//                     label={canvasItem.label}
//                   />
//                 ))}
//                 {provided.placeholder}
//                 <button type="submit">Submit</button>
//               </form>
//             )}
//           </Droppable>

//           {/* Input items area */}
//           <Droppable droppableId="inputItemsArea">
//             {(provided) => (
//               <div
//                 className="inputItems"
//                 style={{ backgroundColor: "cadetblue", padding: "10px" }}
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 <span className="inputItems">Inputs</span>
//                 {inputItems.map((inputItem, index) => (
//                   <Item
//                     id={inputItem.id}
//                     index={index}
//                     key={inputItem.id}
//                     label={inputItem.label}
//                   />
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </div>
//     </DragDropContext>
//   );
// }

function App() {
  // ... existing state and functions

  const [inputItems, setInputItems] = useState([
    { id: "textInput", label: "textInput" },
    { id: "checkbox", label: "checkbox" },
    { id: "radioButton", label: "radioButton" },
    { id: "textArea", label: "textArea" },
    { id: "dropdown", label: "dropdown" },
    { id: "datePicker", label: "datePicker" },
    { id: "fileUpload", label: "fileUpload" },
  ]);

  const [canvasItems, setCanvasItems] = useState([]);
  const canvasFormRef = useRef(null);

  // function onDragEnd(result) {
  //   const { source, destination } = result;

  //   if (!destination) return;

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }

  //   if (source.droppableId === "inputItemsArea") {
  //     // Add a unique ID for items added to the canvas
  //     const newItem = {
  //       ...inputItems[source.index],
  //       id: `${inputItems[source.index].id}-${Date.now()}`, // Unique ID for canvas items
  //     };
  //     const updatedCanvasItems = [...canvasItems];
  //     updatedCanvasItems.splice(destination.index, 0, newItem);
  //     setCanvasItems(updatedCanvasItems);
  //   } else if (source.droppableId === "canvasItemsArea") {
  //     // Handle reordering items within the canvas
  //     const updatedCanvasItems = [...canvasItems];
  //     const [movedItem] = updatedCanvasItems.splice(source.index, 1);
  //     updatedCanvasItems.splice(destination.index, 0, movedItem);
  //     setCanvasItems(updatedCanvasItems);
  //   }
  // }
  function onDragEnd(result) {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (
      source.droppableId === "inputItemsArea" &&
      destination.droppableId === "canvasItemsArea"
    ) {
      const newCanvasItem = {
        ...inputItems[source.index],
        id: `${inputItems[source.index].id}-${Date.now()}`,
      };

      const updatedCanvasItems = [...canvasItems];
      updatedCanvasItems.splice(destination.index, 0, newCanvasItem);
      setCanvasItems(updatedCanvasItems);
    } else if (source.droppableId === "canvasItemsArea") {
      const updatedCanvasItems = [...canvasItems];
      const [movedItem] = updatedCanvasItems.splice(source.index, 1);
      updatedCanvasItems.splice(destination.index, 0, movedItem);
      setCanvasItems(updatedCanvasItems);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (canvasFormRef.current) {
      const formData = new FormData(canvasFormRef.current);

      const formValues = {};
      formData.forEach((value, key) => {
        if (formValues[key]) {
          if (Array.isArray(formValues[key])) {
            formValues[key].push(value);
          } else {
            formValues[key] = [formValues[key], value];
          }
        } else {
          formValues[key] = value;
        }
      });

      console.log("Form Values:", formValues);
    }
  }

  function mergeRefs(...refs) {
    return (node) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      });
    };
  }

  // Handle label update from the Item component
  const handleLabelUpdate = (id, newLabel) => {
    const updatedCanvasItems = canvasItems.map((item) =>
      item.id === id ? { ...item, label: newLabel } : item
    );
    setCanvasItems(updatedCanvasItems);
  };

  const onLabelUpdate = (id, newLabel) => {
    setCanvasItems((prevCanvasItems) =>
      prevCanvasItems.map((item) =>
        item.id === id ? { ...item, label: newLabel } : item
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {/* Form canvas area */}
          <Droppable droppableId="canvasItemsArea">
            {(provided) => (
              <form
                onSubmit={handleSubmit}
                ref={mergeRefs(canvasFormRef, provided.innerRef)}
                className="canvasItems"
                style={{
                  backgroundColor: "coral",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
                {...provided.droppableProps}
              >
                <span className="inputItems">Form Canvas</span>
                {canvasItems.map((canvasItem, index) => (
                  <Item
                    id={canvasItem.id}
                    index={index}
                    key={canvasItem.id}
                    label={canvasItem.label}
                    onLabelUpdate={onLabelUpdate}
                  />
                ))}
                {provided.placeholder}
                <button type="submit">Submit</button>
              </form>
            )}
          </Droppable>

          {/* Input items area */}
          <Droppable droppableId="inputItemsArea">
            {(provided) => (
              <div
                className="inputItems"
                style={{ backgroundColor: "cadetblue", padding: "10px" }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span className="inputItems">Inputs</span>
                {inputItems.map((inputItem, index) => (
                  <Item
                    id={inputItem.id}
                    index={index}
                    key={inputItem.id}
                    label={inputItem.label}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}
export default App;
