import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react'
import {useState} from 'react'
import {useFormContext} from 'react-hook-form'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa'

type Props = InputProps & {
  isPassword?: boolean
}

export default function AuthInput({isPassword, name, ...props}: Props) {
  const [inputType, setInputType] = useState(
    props.type || isPassword ? 'password' : 'text',
  )

  const {
    register,
    watch,
    formState: {errors},
  } = useFormContext()

  const error = errors[name]
  return (
    <FormControl isInvalid={Boolean(error)}>
      <InputGroup>
        <Input
          fontSize={16}
          h="60px"
          border="none"
          shadow="md"
          // border="2px solid"
          // borderColor="black"
          type={inputType}
          bg="white"
          {...register(name)}
          {...props}
        />
        {isPassword && (
          <InputRightElement
            cursor="pointer"
            onClick={() =>
              setInputType(inputType === 'text' ? 'password' : 'text')
            }
            color="gray"
            fontSize={20}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            pr={2}
          >
            {inputType === 'text' ? <FaRegEyeSlash /> : <FaRegEye />}
          </InputRightElement>
        )}
      </InputGroup>

      <FormErrorMessage position="absolute" bottom="-20px" fontSize={12}>
        {String(error?.message) ?? ''}
      </FormErrorMessage>
    </FormControl>
  )
}
