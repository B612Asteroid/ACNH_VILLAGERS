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
          }} style={{"text-decoration": "none" }}>
          <div style={{ background : bubbleColor }} className="AnimalBlock">
            <img alt={ nameKr } src={ imageUri } className="AnimalImg"/>
            <div style={{ color : textColor }} className="AnimalName">
                No. { id } { nameKr }
            </div>
          </div> 
        </Link>
      </div>
    )
  }

}
  

export default AnimalNode;
