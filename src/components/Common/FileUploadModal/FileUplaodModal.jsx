import React from "react";
import { Button, Modal,Progress} from "antd";

export const FileUplaodModal = ({ modalOpen, setModalOpen,getImage,uploadImage,progress }) => {
  return (
    <div>
      <Modal
        title="Change Profile  Picture"
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="submit" type="primary" onClick={uploadImage} className="text-black border-slate-300">
            Upload 
          </Button>,
         
        ]}
      >

{progress === 0 ? (
            <></>
          ) : (
            <div className="progress-bar flex fixed left-[45%] top-[42%]">
              <Progress type="circle" percent={progress} size={90} />
            </div>
          )}
   
  
       <div className="flex justify-between"> <input type="file" className="text-[15px]" onChange={getImage}></input>
        </div>
      </Modal>
    </div>
  );
};
