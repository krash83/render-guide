// This component renders an input with preview capabilities.
// If no value is given, a spinner is shown. If a value is
// available, but it's in loading state, the input will be
// initialized, but disabled

import React from 'react'
import { Input as StyleguideInput, Spinner } from 'vtex.styleguide'

interface Props {
  loading?: boolean
  label: string
  value?: string
  onChange?: (e: any) => void
  disabled?: boolean
}

export const Input: React.SFC<Props> = ({
  loading,
  label,
  value,
  onChange,
  disabled,
}) =>
  value !== undefined
  ? (
    <StyleguideInput
      disabled={disabled || loading}
      label={label}
      value={value}
      onChange={onChange}
    />
  )
  : <Spinner />
