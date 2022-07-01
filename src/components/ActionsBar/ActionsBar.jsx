import { BsDownload, BsScissors } from 'react-icons/bs';

export const ActionsBar = () => {
  return (
    <div>
      <button>
        <BsDownload />
        DOWNLOAD
      </button>
      <button>
        <BsScissors />
        CLIP
      </button>
    </div>
  );
};
