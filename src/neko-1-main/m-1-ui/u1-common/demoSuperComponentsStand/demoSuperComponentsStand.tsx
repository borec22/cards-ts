import React, {ChangeEvent, useState} from 'react';
import classes from './demoSuperComponentsStand.module.css';
import SuperInputText from '../components/c1-SuperInputText/SuperInputText';
import SuperButton from '../components/c2-SuperButton/SuperButton';
import SuperCheckbox from '../components/c3-SuperCheckbox/SuperCheckbox';
import SuperSelect from '../components/c5-SuperSelect/SuperSelect';
import SuperRadio from '../components/c6-SuperRadio/SuperRadio';
import SuperEditableSpan from '../components/c4-SuperEditableSpan/SuperEditableSpan';


export const DemoSuperComponentsStand = () => {
   const [text, setText] = useState<string>('');
   const [editableSpanValue, setEditableSpanValue] = useState<string>("");
   const [checked, setChecked] = useState<boolean>(false);

   const arr = ['x', 'y', 'z'];
   const [value, onChangeOption] = useState(arr[0]);

   const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);


   return (
      <div className={classes.demo}>
         <SuperInputText value={text}
                         dimention={'small'}
                         onChangeText={setText}/>
         <br/>
         <SuperButton size={'medium'} variant={'success'}>OK</SuperButton>
         <br/>
         <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
         <br/>
         <SuperSelect options={arr}
                      value={value}
                      onChangeOption={onChangeOption}
                      style={{margin: '15px 0'}}/>
         <br/>
         <SuperRadio name={'radio'}
                     options={arr}
                     value={value}
                     onChangeOption={onChangeOption}/>
         <br/>
         <SuperEditableSpan value={editableSpanValue}
                            onChangeText={setEditableSpanValue}
                            spanProps={{children: value ? undefined : "enter text..."}}/>
      </div>
   );
}