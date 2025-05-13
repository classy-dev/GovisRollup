import styled from '@emotion/styled';
import { FONT } from '@ComponentFarm/token';

export const MobilePaginationWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    margin-left: 3rem;
    color: gray;

    &.active {
      cursor: pointer;
    }
    &.inactive {
      opacity: 50%;
    }
  }

  .box_num {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    color: gray;
    user-select: none;
  }
`;

// export const PaginationWrap = styled.div`
//   .pagination {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     height: 10rem;
//     user-select: none;
//   }
//   .truncable_class {
//     width: 10rem;
//     padding: 0.5rem;
//     text-align: center;
//     color: gray;
//   }

//   .btn_prev,
//   .btn_next {
//     display: flex;
//     align-items: center;
//     height: 10rem;
//     margin-right: 2rem;
//     color: gray;
//     font-weight: 500;
//     &:hover {
//       color: gray;
//     }
//     &:focus {
//       outline: none;
//     }
//     &.active {
//       cursor: pointer;
//     }
//     &.inactive {
//       cursor: default;
//       opacity: 50%;
//     }
//   }

//   .btn_prev {
//     svg {
//       margin-right: 3rem;
//     }
//   }

//   .btn_next {
//     svg {
//       margin-left: 3rem;
//     }
//   }

//   .box_number {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-grow: 1;

//     .btn_page_number {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       height: 10rem;
//       width: 10rem;
//       border-radius: 50%;
//       cursor: pointer;
//       font-weight: 500;

//       &.active {
//         background-color: #edf2f7;
//         color: #718096;
//       }
//       &.inactive {
//         color: gray;
//       }
//     }
//   }
// `;

export const PaginationWrap = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    padding: 1.2rem 0;
    margin-top: 1.6rem;
    gap: 0.8rem;
  }

  .page-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    border: 1px solid #dfe3e8;
    font-weight: 700;
    font-size: ${FONT.size4};
    line-height: 1.2;
    border-radius: 0.4rem;
    color: var(--color-dark_gray400);
    cursor: pointer;
    svg {
      position: static;
      width: 2.4rem;
      height: 2.4rem;
      top: auto;
      left: auto;
      color: currentColor;
    }
  }

  .page-item.disabled {
    opacity: 0.5;
    background: #919eab;
    border-color: #919eab;
    color: #c4cdd5;
    cursor: not-allowed;
    svg {
      fill: #c4cdd5;
    }
  }

  .page-item.active {
    background: var(--color-gray1);
    color: var(--color-blue60);
    border-color: currentColor;
  }

  .page-link {
    display: flex;
    color: inherit;
    cursor: inherit;
  }
`;
