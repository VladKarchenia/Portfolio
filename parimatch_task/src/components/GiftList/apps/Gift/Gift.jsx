import React, {PureComponent} from 'react'

class Gift extends PureComponent {
render() {
    // const { value, id, isPinned, isCompleted, deleteItem, dueDate } = this.props
    // const { editMode, inputTaskValue } = this.state

    return (
      // <div className={styles.root}>
      //   <li className={cx('activeTask', { isPinned, isCompleted })}>
      //     <div className={styles.leftSide}>
      //       <span className={styles.taskHandle} ></span>
      //       <input type="checkbox" className={styles.checkImg} />
      //       <label className={styles.checkLabel} onClick={this.toggleCompleted}></label>
      //       {!editMode
      //         ? <span className={styles.taskText} onClick={this.changeTaskName}>{value || 'Default'}</span>
      //         : <input ref={this.inputRef} value={inputTaskValue} onChange={this.onChange} autoFocus className={styles.inputTask} />
      //       }
      //       <span className={cx('dueDate', { isDeadline, noDueDate, isOverdue })}>
      //         <DatePicker
      //           dateFormat={DATE_FORMAT}
      //           placeholderText={NO_DUE_DATE}
      //           clearButtonTitle={'Remove due date'}
      //           isClearable
      //           selected={momentDueDate}
      //           onChange={this.handleChange}
      //           minDate={today}
      //           onKeyDown={this.onKeyDown}
      //         />
      //       </span>
      //     </div>
      //     <ul className={styles.actions}>
      //       <li className={styles.star}>
      //         <input type="text" className={styles.starInp} />
      //         <label className={styles.starLabel}>
      //           <span className={styles.starSpan} onClick={this.togglePinned}></span>
      //         </label>
      //       </li>
      //       <li className={styles.delete}>
      //         <span className={styles.deleteSpan} onClick={() => deleteItem(id)}></span>
      //       </li>
      //     </ul>
      //   </li>
      // </div>

      <div>
        <li>
          <div className='gift_image_container'>
            <div className='gift_img'></div>
          </div>
          {/* <div className='gift_details_container'>
            
          </div> */}
          <div className='gift_text_container'>
            <span className='gift_title'>Title</span>
            <div className='gift_date'>
              <div>
                <span>12-07-2019</span>
                <span className='gift_text'>start</span>
              </div>
              <div>
                <span>22-07-2019</span>
                <span className='gift_text'>end</span>
              </div>
            </div>
            <span className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, error.</span>
            <div className='gift_info'>
              <div>
                <span className='gift_info_value'>20</span>
                <span className='gift_text'>items</span>
              </div>
              <div>
                <span className='gift_info_value'>100</span>
                <span className='gift_text'>chance total</span>
              </div>
            </div>
            <div className='gift_button'>Explain</div>
          </div>
        </li>
      </div>
    )
  }
}

export default Gift
