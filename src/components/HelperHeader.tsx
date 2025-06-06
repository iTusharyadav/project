// import { Button } from "./ui/button";
// import { Share2, Save } from "lucide-react";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import { useDispatch, useSelector } from "react-redux";
// // import { compilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
// import { CompilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
// import { RootState } from "@/redux/store";

// export default function HelperHeader() {
//     const dispatch = useDispatch();
//     const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage);
//     return (
//         <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
//             <div className="__btn_container flex gap-1">
//                 <Button className="flex justify-center items-center gap-1">
//                     <Save size={16} />
//                 </Button>
//                 <Button className="flex justify-center items-center gap-1" variant="secondary">
//                     <Share2 size={16} />
//                     {/* Share */}
//                 </Button>
//             </div>
//             <div className="_tab_switcher flex justify-center items-center gap-1">
//                 <small>Current Language:</small>
//                 <Select defaultValue={currentLanguage}
//                     onValueChange={(value) => dispatch(updateCurrentLanguage(value as compilerSliceStateType["currentLanguage"]))}>


//                     <SelectTrigger className="w-[120px] bg-gray-800 outline-none focus:ring-0">
//                         <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="html">Html</SelectItem>
//                         <SelectItem value="css">CSS</SelectItem>
//                         <SelectItem value="javascript">JavaScript</SelectItem>
//                     </SelectContent>
//                 </Select>
//             </div>
//         </div >
//     )
// }




// import { Button } from "./ui/button";
// import { Share2, Save } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { CompilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

export default function HelperHeader() {
    const dispatch = useDispatch();
    const currentLanguage = useSelector(
        (state: RootState) => state.compilerSlice.currentLanguage
    );

    return (
        <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
            <div className="__btn_container flex gap-1">
{/*                 <Button className="flex justify-center items-center gap-1">
                    <Save size={16} />
                </Button>
                <Button className="flex justify-center items-center gap-1" variant="secondary">
                    <Share2 size={16} />
                </Button> */}
            </div>
            <div className="_tab_switcher flex justify-center items-center gap-1">
                <small>Current Language:</small>
                <Select
                    defaultValue={currentLanguage}
                    onValueChange={(value) =>
                        dispatch(
                            updateCurrentLanguage(
                                value as CompilerSliceStateType["currentLanguage"]
                            )
                        )
                    }
                >
                    <SelectTrigger className="w-[120px] bg-gray-800 outline-none focus:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="html">Html</SelectItem>
                        <SelectItem value="css">CSS</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
