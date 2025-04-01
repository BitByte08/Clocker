import {ToolBoxProps} from "@/Type";


const ToolBox = (props:ToolBoxProps) =>(
  <article className={props.TabClass}>
    {props.children}
    <div className={props.LineClass} />
  </article>
)
export default ToolBox;