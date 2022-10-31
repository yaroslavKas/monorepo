import { FormControl, TextField } from '@material-ui/core';
import Button from '@monorepo/button';

const Input = () => {
    return (
        <div>
            <Button content='input' />
            <FormControl>
                <TextField variant='outlined' label='lol' value='' type='test' />
            </FormControl>
        </div>
    );
};

export default Input;
