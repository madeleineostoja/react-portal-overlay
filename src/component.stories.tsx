import React, { useState } from 'react';
import { Overlay } from '.';
import { css } from '@emotion/core';

export default {
  title: 'API & Demo',
  component: Overlay
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Overlay</button>
      <Overlay
        css={css`
          background: white;
          padding: 3rem;
          width: 100%;
        `}
        open={isOpen}
      >
        <h1
          css={css`
            margin-bottom: 2rem;
          `}
        >
          Overlay
        </h1>
        <p>
          Nisi vitae commodo curae in amet nec tortor sodales varius iaculis nam
          duis cursus ullamcorper orci consequat maecenas a sagittis ultrices
          bibendum facilisis aliquet ad arcu laoreet natoque eget per mus aptent
          nisl posuere nibh dictum porta torquent molestie donec cras risus quis
          dui massa etiam turpis pharetra ultricies aliquam
        </p>
        <button onClick={() => setIsOpen(false)}>Close Overlay</button>
      </Overlay>
    </>
  );
};

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Overlay
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnClick
        css={css`
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 80%;
            background: white;
            padding: 3rem;
            border-radius: 5px;
          `}
        >
          <h1>Modal</h1>
          <p>
            Nisi vitae commodo curae in amet nec tortor sodales varius iaculis
            nam duis cursus ullamcorper orci consequat maecenas a sagittis
            ultrices bibendum facilisis aliquet ad arcu laoreet natoque eget per
            mus aptent nisl posuere nibh dictum porta torquent molestie donec
            cras risus quis dui massa etiam turpis pharetra ultricies aliquam
          </p>
        </div>
      </Overlay>
    </>
  );
};
