import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


class AnimalNode extends React.Component {

  render() {
    const { id, bubbleColor, imageUri, textColor, nameKr } = this.props;
    return (
      <div>
        <Link to={{
            pathname : `/Animal/${ id }`,
            id : id
          }}>
          <div style={{ background : bubbleColor }}>
            <img alt={imageUri} src={ imageUri }/>
            <p style={{ color : textColor }}>
              No. { id } { nameKr }
            </p>
          </div> 
        </Link>
      </div>
    )
  }

}
  

export default AnimalNode;
