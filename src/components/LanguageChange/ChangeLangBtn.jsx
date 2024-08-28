// import { useState } from "react";
// // import { useTheme } from "../contexts/ThemeContext";

// export default function ChangeLangBtn() {
//     const {themeMode, darkTheme, lightTheme}=useTheme();
// const [checked,setChecked]=useState(false)

// function ChangeTheme(e){
// let checkBoxStatus=e.currentTarget.checked;
// if(checkBoxStatus==true){
//     // if status true means checkbox checked call darkTheme()
//     lightTheme()
    
// }
// else{
//      // if status false means checkbox Unchecked call lightTheme()
//     darkTheme()
// }
// }


//     return (
//         <label className="relative inline-flex items-center  justify-start  cursor-pointer ml-1">
//             <input
//                 type="checkbox"
//                 value=""
//                 className="sr-only peer"
//                 checked={themeMode==='dark'}
//                 onChange={ChangeTheme}
//             />
//             <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#259dff36]"></div>
//             <span className="ml-3 text-sm font-semibold text-blue-300  dark:text-gray-200">Toggle Theme</span>
      
//             </label>
//     );
// }

