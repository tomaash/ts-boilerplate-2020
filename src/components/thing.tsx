import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

// export const Thing: FC = (props) => {
//   return (
//     <div>
//       <h1>this is a thing</h1>
//     </div>
//   );
// };

@observer
export class Thing extends React.Component {
  @observable cnt = 0
  render() {
    return (
      <div>
        <h1>this is a thing {this.cnt}</h1>
        <button onClick={() => this.cnt++}>INC</button>
      </div>
    )
  }
}
