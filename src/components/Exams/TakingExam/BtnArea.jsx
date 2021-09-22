import React from 'react'
import Button from "react-bootstrap/Button";

const BtnArea = ({Questions,index,setIndex}) => {
    return (
        <>
          <div style={{ fontSize: "20px" }}>
            {Questions.length - index - 1} Questions Left
          </div>
          <div>
            <Button
              variant="primary"
              size="lg"
              className="btn-primary"
              onClick={() => setIndex(index - 1)}
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="btn-primary"
            >
              {index === Questions.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>  
        </>
    )
}

export default BtnArea
